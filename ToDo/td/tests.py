from django.test import TestCase, Client
from .models import Tarefas

# Create your tests here.


class testes(TestCase):

    def test_index(self):
        """Testando rota index"""
        c = Client()
        response = c.get('')
        self.assertEqual(response.status_code, 200)
