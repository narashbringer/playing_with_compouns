from rest_framework.serializers import ModelSerializer
from .models import ingredients

class IngredientSerializer(ModelSerializer):
    class Meta:
        model = ingredients
        fields = ('name', 'vegan', 'non_comedogenic', 'can_be_sold_in_china', 'user')