from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('login/', views.loginV, name="login"),
    path('logout/', views.logoutV, name='logout'),
    path('register/', views.registerV, name='register'),
    path('adicionar/', views.adicionarTarefa, name="adicionar"),
    path('remover/<int:id>', views.remover, name="remover"),
]
