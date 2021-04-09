$(document).ready(function(){
    $('.product').each(function(i, element) {
        
        let data = {"Id": i, "ProductId": $(element).attr("productId"), "Url": $(element).attr("url")};

        let product = element;
        
        let row = document.createElement('div');
        row.className = "form-row";

        let form_group = document.createElement('div');
        form_group.className = "form-group";

        for (j = 5; j > 0; j--) {
            let star = document.createElement("input");
            let label = document.createElement("label");
           
            star.type = "radio";
            star.id = data.ProductId + j;
            star.name = data.ProductId;
            star.url = data.Url;
            star.className = "star star-" + j;
            star.value = j;
            
            label.className = "star star-" + j;
            label.htmlFor = data.ProductId + j;
            
            form_group.append(star, label);
        }

        row.append(form_group);
        product.appendChild(row);
    });

    $('input.star').click(function(){
        let rating = this.value;
        let productId = this.name;
        let url = this.url;

        alert("Post request sent to server - " + "productId: " + productId + ", rating: " + rating);
        
        // The post request would look like this

        // $.post(url,
        // {
        //     rating: rating,
        //     productId: productId
        // });
    });
});