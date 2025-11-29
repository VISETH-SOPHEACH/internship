SELECT 
    o.id AS order_id,
    o.customer_id,
    o.total_amount,
    o.created_at,
    oi.product_id,
    oi.quantity,
    oi.price
FROM orders o
LEFT JOIN order_items oi
    ON o.id = oi.order_id
ORDER BY o.id;