import datetime
import json
from datetime import datetime, timedelta

from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.db.models import Sum
from django.http import HttpResponseRedirect, JsonResponse
from django.urls import reverse_lazy
from django.utils import timezone
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView, TemplateView

from .forms import CategoryForm, TransactionForm, BudgetForm
from .models import Category, Transaction, Budget


# BUDGET
@method_decorator(login_required, name='dispatch')
class BudgetListView(ListView):
    model = Budget
    template_name = 'budget_section/category_transaction_budget_list.html'
    paginate_by = 100
    extra_context = {'list_what': 'Budget'}

    def get_queryset(self):
        user = self.request.user
        return Budget.objects.filter(user=user).order_by('-start_date')


@method_decorator(login_required, name='dispatch')
@method_decorator(csrf_protect, name='dispatch')
class BudgetCreateView(CreateView):
    model = Budget
    form_class = BudgetForm
    template_name = 'budget_section/category_transaction_budget_form.html'
    extra_context = {'header': 'Add Budget'}

    def form_valid(self, form):
        self.object = form.save(commit=False)
        self.object.user = self.request.user
        self.object.save()
        return HttpResponseRedirect(self.get_success_url())

    def get_success_url(self):
        messages.success(self.request, 'Budget created successfully!')
        return reverse_lazy('budget_section:budget_list')


@method_decorator(login_required, name='dispatch')
@method_decorator(csrf_protect, name='dispatch')
class BudgetUpdateView(UpdateView):
    model = Budget
    form_class = BudgetForm
    template_name = 'budget_section/category_transaction_budget_form.html'
    extra_context = {'header': 'Update Budget'}

    def form_valid(self, form):
        self.object = form.save(commit=False)
        self.object.user = self.request.user
        self.object.save()
        return HttpResponseRedirect(self.get_success_url())

    def get_success_url(self):
        messages.success(self.request, 'Budget updated successfully!')
        return reverse_lazy('budget_section:budget_list')


@method_decorator(login_required, name='dispatch')
@method_decorator(csrf_protect, name='dispatch')
class BudgetDetailView(DetailView):
    model = Budget
    template_name = 'budget_section/category_transaction_budget_detail.html'
    extra_context = {'detail_what': 'Budget'}

    def get_queryset(self):
        user = self.request.user
        return Budget.objects.filter(user=user).order_by('-id')


@method_decorator(login_required, name='dispatch')
@method_decorator(csrf_protect, name='dispatch')
class BudgetDeleteView(DeleteView):
    model = Budget
    template_name = 'budget_section/category_transaction_budget_delete.html'
    extra_context = {'delete_what': 'Budget'}

    def get_queryset(self):
        user = self.request.user
        return Budget.objects.filter(user=user)

    def get_success_url(self):
        messages.success(self.request, 'Budget deleted successfully!')
        return reverse_lazy('budget_section:budget_list')


# CATEGORY
@method_decorator(login_required, name='dispatch')
class CategoryListView(ListView):
    model = Category
    template_name = 'budget_section/category_transaction_budget_list.html'
    paginate_by = 100
    extra_context = {'list_what': 'Category'}

    def get_queryset(self):
        user = self.request.user
        return Category.objects.filter(user=user).order_by('-id')


@method_decorator(login_required, name='dispatch')
@method_decorator(csrf_protect, name='dispatch')
class CategoryCreateView(CreateView):
    model = Category
    form_class = CategoryForm
    template_name = 'budget_section/category_transaction_budget_form.html'
    extra_context = {'header': 'Add Category'}

    def form_valid(self, form):
        self.object = form.save(commit=False)
        self.object.user = self.request.user
        self.object.save()
        return HttpResponseRedirect(self.get_success_url())

    def get_success_url(self):
        messages.success(self.request, 'Category created successfully!')
        return reverse_lazy('budget_section:category_list')


@method_decorator(login_required, name='dispatch')
@method_decorator(csrf_protect, name='dispatch')
class CategoryUpdateView(UpdateView):
    model = Category
    form_class = CategoryForm
    template_name = 'budget_section/category_transaction_budget_form.html'
    extra_context = {'header': 'Update Category'}

    def form_valid(self, form):
        self.object = form.save(commit=False)
        self.object.user = self.request.user
        self.object.save()
        return HttpResponseRedirect(self.get_success_url())

    def get_success_url(self):
        messages.success(self.request, 'Category updated successfully!')
        return reverse_lazy('budget_section:category_list')


@method_decorator(login_required, name='dispatch')
@method_decorator(csrf_protect, name='dispatch')
class CategoryDetailView(DetailView):
    model = Category
    template_name = 'budget_section/category_transaction_budget_detail.html'
    extra_context = {'detail_what': 'Category'}

    def get_queryset(self):
        user = self.request.user
        return Category.objects.filter(user=user)


@method_decorator(login_required, name='dispatch')
@method_decorator(csrf_protect, name='dispatch')
class CategoryDeleteView(DeleteView):
    model = Budget
    template_name = 'budget_section/category_transaction_budget_delete.html'
    extra_context = {'delete_what': 'Category'}

    def get_queryset(self):
        user = self.request.user
        return Category.objects.filter(user=user)

    def get_success_url(self):
        messages.success(self.request, 'Category deleted successfully!')
        return reverse_lazy('budget_section:category_list')


@method_decorator(login_required, name='dispatch')
class TransactionListView(ListView):
    model = Transaction
    template_name = 'budget_section/category_transaction_budget_list.html'
    extra_context = {'list_what': 'Transaction'}

    def get_queryset(self):
        user = self.request.user
        return Transaction.objects.filter(user=user).order_by('-date')


@method_decorator(login_required, name='dispatch')
@method_decorator(csrf_protect, name='dispatch')
class TransactionCreateView(CreateView):
    model = Transaction
    form_class = TransactionForm
    template_name = 'budget_section/category_transaction_budget_form.html'
    extra_context = {'header': 'Add Transaction'}
    
    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        kwargs['user'] = self.request.user  # Pass the user to the form's __init__
        return kwargs

    def form_valid(self, form):
        self.object = form.save(commit=False)
        self.object.user = self.request.user
        self.object.save()
        return HttpResponseRedirect(self.get_success_url())

    def get_success_url(self):
        messages.success(self.request, 'Transaction created successfully!')
        return reverse_lazy('budget_section:transaction_list')


@method_decorator(login_required, name='dispatch')
@method_decorator(csrf_protect, name='dispatch')
class TransactionUpdateView(UpdateView):
    model = Transaction
    form_class = TransactionForm
    template_name = 'budget_section/category_transaction_budget_form.html'
    extra_context = {'header': 'Update Transaction'}

    def form_valid(self, form):
        self.object = form.save(commit=False)
        self.object.user = self.request.user
        self.object.save()
        return HttpResponseRedirect(self.get_success_url())

    def get_success_url(self):
        messages.success(self.request, 'Transaction updated successfully!')
        return reverse_lazy('budget_section:transaction_list')


@method_decorator(login_required, name='dispatch')
@method_decorator(csrf_protect, name='dispatch')
class TransactionDetailView(DetailView):
    model = Transaction
    template_name = 'budget_section/category_transaction_budget_detail.html'
    extra_context = {'detail_what': 'Transaction'}

    def get_queryset(self):
        user = self.request.user
        return Transaction.objects.filter(user=user).order_by('-date')


@method_decorator(login_required, name='dispatch')
@method_decorator(csrf_protect, name='dispatch')
class TransactionDeleteView(DeleteView):
    model = Transaction
    template_name = 'budget_section/category_transaction_budget_delete.html'
    extra_context = {'delete_what': 'Transaction'}

    def get_queryset(self):
        user = self.request.user
        return Transaction.objects.filter(user=user)

    def get_success_url(self):
        messages.success(self.request, 'Transaction deleted successfully!')
        return reverse_lazy('budget_section:transaction_list')


@method_decorator(login_required, name='dispatch')
class GetSummaryTiles(TemplateView):
    template_name = 'budget_section/current_period.html'
    context_object_name = 'budget_data'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        # Get the budget ID from the URL parameters
        budget_slug = self.kwargs['slug']

        # Get the budget object
        budget = Budget.objects.get(slug=budget_slug)

        # Add the budget object to the context
        context['budget'] = budget

        # Get the total amount spent in the budget
        context['total_spent'] = Transaction.objects.filter(budget=budget).aggregate(Sum('amount'))['amount__sum'] or 0

        # Get the total number of transactions in the budget
        context['total_budget_transactions'] = Transaction.objects.filter(budget=budget).count()

        # Get the total budget amount
        context['total_budget'] = budget.amount

        # Get budget name
        context['budget_name'] = budget.name

        # Get budget start_date
        context['budget_start_date'] = budget.start_date

        # Get budget end_date
        context['budget_end_date'] = budget.end_date

        # Budget amount spent
        context['budget_amount_spent'] = context['total_budget'] - context['total_spent']

        if context['budget_amount_spent'] == 0.00:
            percentage_spent = 0.00
        else:
            # Calculate the percentage spent
            percentage_spent = 100 - round(context['budget_amount_spent'] / context['total_budget'] * 100, 2)

        # Add the percentage spent to the context
        context['percentage_spent'] = percentage_spent

        # Get budget_daily_spending for line chart
        budget = Budget.objects.get(slug=budget_slug)
        transactions = Transaction.objects.filter(budget=budget)
        categories = Category.objects.filter(user=self.request.user)
        budgets = Budget.objects.filter(user=self.request.user)
        today = timezone.localdate()
        labels = []
        data = []

        labels_2 = []
        data_2 = []

        labels_3 = []
        data_3 = []
        
        try:
            # Get transactions
            earliest_transaction = Transaction.objects.filter(budget=budget).earliest('date')
            latest_transaction = Transaction.objects.filter(budget=budget).latest('date')

            days = latest_transaction.date - earliest_transaction.date + timedelta(days=1)

            date = earliest_transaction.date
        except Transaction.DoesNotExist:
            # If transaction does not exist, add an error message to the context
            context['error_message'] = 'Transaction data not found. Add at least one transaction!'
            return context
        
        # Queries for the line chart
        for i in range(days.days):
            serialized_date = date.isoformat()
            total_spent = float(transactions.filter(date=date).aggregate(Sum('amount'))['amount__sum'] or 0)
            labels.append(serialized_date)
            data.append(total_spent)
            date += timedelta(days=1)
        
        context['labels'] = json.dumps(labels)
        context['data'] = json.dumps(data)

        # Queries for the pie chart
        for category in categories:
            amount = Transaction.objects.filter(
                budget=budget,
                category=category
            ).aggregate(Sum('amount')).get('amount__sum') or 0
            labels_2.append(category.name)
            data_2.append(float(amount))
        context['labels_2'] = json.dumps(labels_2)
        context['data_2'] = json.dumps(data_2)

        # Queries for bar chart
        for budget in budgets:
            amount = Transaction.objects.filter(
                budget=budget
            ).aggregate(Sum('amount')).get('amount__sum') or 0
            labels_3.append(budget.name)
            data_3.append(float(amount))
        context['labels_3'] = json.dumps(labels_3)
        context['data_3'] = json.dumps(data_3)
        return context
