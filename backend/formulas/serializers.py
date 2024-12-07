from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from formulas.models import Formula


class FormulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Formula
        fields = '__all__'
        extra_kwargs = {
            'author': {'read_only': True}
        }

    def create(self, validated_data):
        validated_data['author'] = self.context['request'].user
        return super(FormulaSerializer, self).create(validated_data)