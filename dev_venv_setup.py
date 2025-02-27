# Sets up the python virtual environment for development with Django!

# Please input the following line into your command line to run: python dev_venv_setup.py

import os
import subprocess
import sys

def create_virtual_environment(env_name="venv"):
    # Do stuff
    test = "hi"

def activate_virtual_environment(env_name="venv"):
    # Do more stuff
    test="hello even"

if __name__ == "__main__":
    env_name = input("Enter the name for the virtual environment (Default is 'venv'): ") or "venv"
    create_virtual_environment(env_name)
    activate_virtual_environment(env_name)