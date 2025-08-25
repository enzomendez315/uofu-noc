from django.db import models
from django.contrib.auth.models import User


class Ticket(models.Model):
    ticket_number = models.CharField(max_length=200, unique=True)
    title = models.CharField(max_length=255)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="tickets_set")
    status = models.CharField(max_length=255)
