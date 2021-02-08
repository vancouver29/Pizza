from django.db import models


class Order(models.Model):
    kunden_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    telefon = models.IntegerField(unique=True)
    sorte = models.CharField(max_length=13)
    size = models.CharField(max_length=8)
