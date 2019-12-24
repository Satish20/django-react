from rest_framework import generics

from .models import Ds
from .serializers import DsSerializer


class DsListCreate(generics.ListCreateAPIView):
    queryset = Ds.objects.all()
    serializer_class = DsSerializer
