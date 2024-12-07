from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Formula(models.Model):
    name = models.CharField(max_length=100)
    latex_view = models.TextField()
    creation_date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.latex_view

