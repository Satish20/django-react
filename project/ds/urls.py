from django.urls import path

from . import views

urlpatterns = [
    path('api/ds/', views.DsListCreate.as_view())
]
