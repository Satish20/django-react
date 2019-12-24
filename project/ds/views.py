from .models import Ds
from .serializers import DsSerializer
from rest_framework import generics


class DsListCreate(generics.ListCreateAPIView):
    queryset = Ds.objects.all()
    serializer_class = DsSerializer
