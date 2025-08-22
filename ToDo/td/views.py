from django.shortcuts import render
from .models import Tarefas
from django.http import HttpResponseRedirect
from django.urls import path
from django.contrib.auth.models import User
from django.contrib.auth import aauthenticate, login, logout
from django.contrib.auth.decorators import login_required
# Create your views here.


def index(request):
    tarefas = Tarefas.objects.filter(autorTarefa=request.user)
    return render(request, 'td/index.html', {"tarefas": tarefas})


def loginV(request):
    return render(request, 'td/login.html')


def logoutV(request):
    pass


def registerV(request):
    return render(request, 'td/register.html')
