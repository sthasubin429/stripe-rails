class StripeService

  def create_customer(name, email, contact, description=nil)
    Stripe::Customer.create({
      name: name,
      email: email,
      contact: contact,
      description: description
     })
  end
end