# Sets up the python virtual environment for development with Django!

# Please input the following line into your command line to run: python dev_venv_setup.py

import os
import subprocess
import sys

def create_virtual_environment(env_name="venv"):
    # Creates the virtual environment directory
    try:
        subprocess.check_call([sys.executable, "-m", "venv", env_name])
        print(f"Virtual environment named '{env_name}' created successfully!")
    except subprocess.CalledProcessError as e:
        print(f"Failed to create the virtual environment: {e}")
        sys.exit(1)

def activate_virtual_environment(env_name="venv"):
    # Displays how to activate the virtual environment, and the next steps of the installation 
    if os.name == "nt":
        venv_activate_path = os.path.join(env_name, "Scripts", "activate")
    else:
        venv_activate_path = os.path.join(env_name, "bin", "activate")

    if os.path.exists(venv_activate_path):
        print(f"To activate the virtual environment, run: source {venv_activate_path}")
        print(f"To deactivate the environment, run: deactivate")
        print(f"After activating the environment, to install the required dependencies for django, run: pip install -r requirements.txt")
    else:
        print(f"Activation script not found at {venv_activate_path}")

if __name__ == "__main__":
    env_name = input("Enter the name for the virtual environment (Default is 'venv'): ") or "venv"
    create_virtual_environment(env_name)
    activate_virtual_environment(env_name)