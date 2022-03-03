from django.conf.urls import url
from django.urls import path, include
from .views import (
    IngredientApiView,
)

urlpatterns = [
    path('', IngredientApiView.as_view()),
]