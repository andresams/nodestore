FROM mongo

COPY categories.json /categories.json
COPY products.json /products.json
CMD mongoimport --host mongostore --db store --collection categories --type json --file /categories.json --jsonArray && mongoimport --host mongostore --db store --collection products --type json --file /products.json --jsonArray
