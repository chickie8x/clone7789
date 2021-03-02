from django.shortcuts import render

# Create your views here.
from clonepages.models import Article,SlideManager




def index(request):
    imgs=[]
    slideobject = str(SlideManager.objects.all()[0]);
    splitObject = slideobject.split(" ")
    imgs.append(splitObject[3][5:-1])
    imgs.append(splitObject[8][5:-1])
    return render(request,'clonepages/index.html',{'images':imgs})


def sport(request):
    return render(request,'clonepages/sport.html',{})


def gamble(request):
    return render(request,'clonepages/gamble.html',{})


def banca(request):
    return render(request, 'clonepages/banca.html', {})


def trochoi(request):
    return render(request,'clonepages/trochoi.html',{})


def xoso(request):
    return render(request,'clonepages/xoso.html',{})


def baiviet(request):
    articles = Article.objects.all()
    return render(request, 'clonepages/baiviet.html',{'articles':articles})


def xembaiviet(request,slug):
    post = Article.objects.filter(slug=slug)
    return render(request,'clonepages/post.html',{'post':post[0]})

