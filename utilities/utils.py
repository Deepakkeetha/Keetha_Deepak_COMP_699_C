# utilities/utils.py

import random
import string

def generate_random_string(length=12):
    characters = string.ascii_letters + string.digits
    return "-" + ''.join(random.choice(characters) for _ in range(length))