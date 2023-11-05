from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient



app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:5173"]}})

client = MongoClient('mongodb://localhost:27017/')
db = client['Hackout_Hackathon']
mongo = db['users'] 
doctor = db['doctor_data']
appointment = db['appointments']


@app.route('/api/appointments/<name>', methods=['GET'])
def get_appointment_by_name(name):
    try:
        # Find the appointment with the specified name
        appointment_data = appointment.find_one({'name': name}, {'_id': 0})

        if appointment_data:
            return jsonify(appointment_data)
        else:
            return jsonify({'message': 'Appointment not found'})
    except Exception as e:
        return jsonify({'error': str(e)})



@app.route('/api/appointments', methods=['GET'])
def get_appointments():
    try:
        # Retrieve all appointment data from the "appointments" collection
        appointments = list(appointment.find({}, {'_id': 0}))

        return jsonify(appointments)
    except Exception as e:
        return jsonify({'error': str(e)})



@app.route('/api/login', methods=['POST'])
def user_login():
    try:
        data = request.json

        print("Received data:", data)  # Debug: Print received data

        # Retrieve the doctor's credentials by username
        doctor = doctor.find_one({'username': data['username']})

        print("Doctor data:", doctor)  # Debug: Print doctor data

        if doctor:
            if doctor.get('password') == data['password']:
                return jsonify({'message': 'Login successful', 'username': doctor.get('username')})
            else:
                return jsonify({'message': 'Invalid password', 'username': doctor.get('username')})
        else:
            return jsonify({'message': 'Doctor not found'})
    except Exception as e:
        print("Error:", str(e))  # Debug: Print the error
        return jsonify({'error': 'Login failed'})




@app.route('/api/book_appointment', methods=['POST'])
def book_appointment():
    try:
        # Get form data from the request
        data = {
            'name': request.form.get('name'),
            'age': request.form.get('age'),
            'problem': request.form.get('problem'),
            'appointmentdate': request.form.get('appointmentdate'),
            'appointmenttime': request.form.get('appointmenttime'),
        }

        # Insert the appointment data into the "appointments" collection
        appointment.insert_one(data)

        return jsonify({'message': 'Appointment booked successfully'})
    except Exception as e:
        return jsonify({'error': 'Appointment booking failed'})

@app.route('/api/doctors', methods=['GET'])
def get_doctors():
    try:
        # Retrieve all doctor data from the collection
        doctors = list(doctor.find({}, {'_id': 0, 'username': 1, 'specs': 1}))

        return jsonify(doctors)
    except Exception as e:
        return jsonify({'error': str(e)})



@app.route('/api/latest_username', methods=['GET'])
def get_latest_username():
    try:
        # Find the user with the latest data (you can adjust sorting as needed)
        latest_user = mongo.find_one(sort=[('_id', -1)])

        if latest_user:
            return jsonify({'username': latest_user.get('username', '')})
        else:
            return jsonify({'username': 'No user found'})
    except Exception as e:
        return jsonify({'error': str(e)})
 # Collection for users

# @app.route('/api/doctors', methods=['GET'])
# def get_doctors():
#     try:
#         # Retrieve doctor data from the collection
#         doctors = list(doctor.find({}, {'_id': 0}))
#         return jsonify(doctors)
#     except Exception as e:
#         return jsonify({'error': str(e)})



@app.route('/api/signup_doctor', methods=['POST'])
def signup_doctor():
    try:
        data = request.json

        # Upload the image to imgbb
        image_url = upload_image_to_imgbb(data['image'])

        # Create a doctor data object
        doctor_data = {
            'username': data['username'],
            'email': data['email'],
            'password': data['password'],
            'phone': data['phone'],
            'license': data['license'],
            'gender': data['gender'],
            'specs': data['specs'],
            'image_url': image_url,
        }

        # Insert the doctor data into the MongoDB collection
        doctor.insert_one(doctor_data)

        return jsonify({'message': 'Doctor signup successful'})
    except Exception as e:
        return jsonify({'error': 'Doctor signup failed'})

def upload_image_to_imgbb(image):
    try:
        response = requests.post(
            'https://api.imgbb.com/1/upload',
            headers={
                'Authorization': '5145813640b9bcb2745b98bf93249528'
            },
            files={
                'image': (image.filename, image)
            }
        )
        data = response.json()
        return data['data']['url']
    except Exception as e:
        return None

@app.route('/api/user_signup', methods=['POST'])
def user_signup():
    try:
        
        # Get form data from the request
        form_data = request.form.to_dict()

        # Upload the image to ImgBB
        img_url = upload_image_to_imgbb(request.files['image'])

        # Save the image URL to the form data
        form_data['image_url'] = img_url

        # Insert the form data into the MongoDB collection
        users = mongo  # Use the 'users' collection
        user_id = users.insert_one(form_data).inserted_id

        return jsonify({'message': 'User signed up successfully', 'user_id': str(user_id)})
    except Exception as e:
        return jsonify({'error': str(e)})

def upload_image_to_imgbb(image):
    imgbb_api_key = '5145813640b9bcb2745b98bf93249528'  # Replace with your ImgBB API key
    imgbb_url = 'https://api.imgbb.com/1/upload'

    try:
        form_data = {
            'key': imgbb_api_key,
        }

        files = {'image': image}

        response = requests.post(imgbb_url, data=form_data, files=files)
        data = response.json()

        return data['data']['url']
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    app.run(debug=True)
