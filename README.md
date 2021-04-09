# 5star-rating-widget
5-star widget for eCommerce sites for users to record product ratings

star-ratings.js is a script that creates a 5-star rating widget that can be used to rate products on e-commerce sites.
style.css provides the styling for the widget.

To integrate the 5-star rating widget into your website please add style.css to the head of your html file. Also please add the jquery and bootstrap libraries to the head like this.

    <link rel="stylesheet" href="style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
   
Add star-ratings.js script to the body of your html file.
    
    <script src="star-ratings.js"></script>
   
To use the 5-star rating widget for each of your products, assign a class called "product", a url attribute with the Url of your request, and a productId attribute to your product element. For example:

    <p class = "product" url = "http://amazon.ca/update-product-rating" productId = "5">Guitar</p>

