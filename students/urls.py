#path() is a function that connect the url and views

from django.urls import path
#import views from the directory itself
from . import views

urlpatterns = [
    # /
    path('', views.students, name='students.index'),
]
