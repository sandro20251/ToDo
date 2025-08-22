from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Tarefas(models.Model):
    autorTarefa = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="tareafas_por_autor")
    dataTarefa = models.DateField()
    LocalTarefa = models.CharField(max_length=64)
    descricaoTarefa = models.CharField(max_length=1000)
    tarefa = models.CharField(max_length=64)
    objetivoTarefa = models.CharField(max_length=250)

    def __str__(self):
        return f"{self.autorTarefa} - {self.tarefa}"
