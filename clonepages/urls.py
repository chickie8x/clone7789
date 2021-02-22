from django.urls import path
from clonepages import views

urlpatterns =[
    path('', views.index, name = 'index'),
    path('thethao/', views.sport, name = 'thethao'),
    path('songbai/', views.gamble, name = 'songbai'),
    path('banca/', views.banca, name = 'banca'),
    path('trochoi/', views.trochoi, name = 'trochoi'),
    path('xoso/', views.xoso, name = 'xoso'),
    path('baiviet/', views.baiviet, name = 'baiviet'),
    path('baiviet/<slug:slug>/', views.xembaiviet, name = 'xembaiviet'),
]
