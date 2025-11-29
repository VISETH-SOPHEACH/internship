SELECT 
    c.id,
    c.name,
    c.email,
    SUM(o.total_amount) AS total_spent
FROM customers c
JOIN orders o 
    ON c.id = o.customer_id
WHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 6 MONTH)
GROUP BY c.id, c.name, c.email
ORDER BY total_spent DESC
LIMIT 5;