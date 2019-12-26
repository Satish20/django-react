from rest_framework import viewsets

from .models import Ds
from .serializers import DsSerializer


class DsViewSet(viewsets.ModelViewSet):
    queryset = Ds.objects.all()
    serializer_class = DsSerializer
