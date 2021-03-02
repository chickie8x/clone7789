from django.contrib import admin

# Register your models here.
from clonepages.models import Category, Article, SlideManager

admin.site.register(Category)
admin.site.register(Article)
admin.site.register(SlideManager)