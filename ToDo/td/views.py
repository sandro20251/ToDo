from django.shortcuts import render
from .models import Tarefas
from django.http import HttpResponseRedirect
from django.urls import path
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.urls import reverse
# Create your views here.


def index(request):
    tarefas = Tarefas.objects.filter(autorTarefa=request.user)
    return render(request, 'td/index.html', {"tarefas": tarefas, "usuario": request.user})


def loginV(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            return HttpResponseRedirect(reverse('index'))
    return render(request, 'td/login.html')


def logoutV(request):
    logout(request)
    return HttpResponseRedirect(reverse('login'))


def registerV(request):
    mensagem = None
    if request.method == "POST":
        usuario = request.POST['usernameRegistro']
        email = request.POST['emailRegistro']
        password = request.POST['senhaRegistro']
        passwor2 = request.POST['senha2Registro']

        if password != passwor2:
            mensagem = "As senhas estão diferentes escreva de novo"
            return HttpResponseRedirect(reverse('register'))
        registro = User.objects.create_superuser(
            username=usuario, email=email, password=password)
        registro.save()
        return HttpResponseRedirect(reverse('login'))
    return render(request, 'td/register.html', {"mensagem": mensagem})
