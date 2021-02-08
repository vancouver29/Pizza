from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('formular', views.index),
    path('orders', views.index)
]
