json.extract! customer, :id, :name, :email, :city, :company, :created_at, :updated_at
json.url customer_url(customer, format: :json)
