# Fintrack (Persoanl Finance Tracker with Budget Optimization)

## Prerequisites

Before you can run this project, you need to have the following software installed on your machine:

- Python (3.8 or later)
- Django (4.2 or later)

To check if you have Python installed, run the following command in your terminal:

`python --version`

To check if you have Django installed, run the following command in your terminal:

`python -m django --version`

If you don't have either of these programs installed, you can install them by following the instructions at the following links:

- [Install Python](https://www.python.org/downloads/)
- [Install Django](https://docs.djangoproject.com/en/3.1/topics/install/)

Running the project
1.	Clone the GitHub repository to your local machine:

    git clone https://github.com/Deepakkeetha/Keetha_Deepak_COMP_699_C.git

2.	Navigate to the root directory of the project:

    `cd django-project`

3.	Install the required dependencies using the command:

    `pip install -r requirements.txt`

4.	Create a MySQL database for the application and add the database credentials to the settings.py file. To find the settings file, navigate to ./fintrack/settings.py


    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'fintrack',
            'USER': 'root',
            'PASSWORD': 'manunite1',
            'HOST':'localhost',
            'PORT':'3306',
        }
    }

5.	Run the migrations to create the database tables using the command:

    `python manage.py migrate`

6.	Create a superuser for the application using the command:

    `python manage.py createsuperuser`

7.	Run the development server:

    `python manage.py runserver`

This will start the development server at http://127.0.0.1:8000/.

If you want to specify a different port, you can do so by using the --port flag, like this:

`python manage.py runserver --port 8080`

This will start the development server at http://127.0.0.1:8080/.
