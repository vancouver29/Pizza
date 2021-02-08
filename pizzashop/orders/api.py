from orders.models import Order
from rest_framework import viewsets, permissions
from .serializers import OrderSerializer

# Order Viewset ( allow to create full CRUD API create, update, delete )


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = OrderSerializer
