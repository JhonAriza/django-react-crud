from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=200)
    lastname = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.name