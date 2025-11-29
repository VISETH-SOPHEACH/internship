SELECT 
    s.id AS staff_id,
    s.name,
    s.sex,
    s.date_of_birth,
    s.address,
    s.phone,
    p.position AS current_position
FROM staffs s
JOIN positions p 
    ON s.id = p.staff_id
WHERE TIMESTAMPDIFF(YEAR, p.start_date, COALESCE(p.end_date, CURDATE())) > 5;