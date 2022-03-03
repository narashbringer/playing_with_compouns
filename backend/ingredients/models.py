from django.db import models
from django.conf import settings # new


class ingredients(models.Model):
    name = models.TextField()
    vegan = models.BooleanField(default = False, blank = True)
    non_comedogenic = models.BooleanField(default = False, blank = True)
    can_be_sold_in_china = models.BooleanField(default = False, blank = True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE, blank = True, null = True)
    def __str__(self):
        return self.name