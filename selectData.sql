SELECT 
    s.id AS staff_id,
    s.name,
    s.sex,
    s.date_of_birth,
    s.address,
    s.phone,
    p.position AS current_position
FROM staffs s
LEFT JOIN positions p 
    ON s.id = p.staff_id 
    AND p.end_date IS NULL;