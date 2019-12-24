from rest_framework import serializers

from .models import Ds


class DsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ds
        fields = '__all__'
