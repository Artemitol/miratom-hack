from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework import mixins, viewsets
from formulas.serializers import *

from formulas.models import Formula


class FormulasViewSet(viewsets.ModelViewSet):
    serializer_class = FormulaSerializer
    queryset = Formula.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset = Formula.objects.filter(author=user).order_by('-creation_date')
        return queryset