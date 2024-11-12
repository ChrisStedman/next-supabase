-- Define a list of user IDs
WITH user_ids AS (
    SELECT unnest(ARRAY[
        '301ffe32-e613-433d-968b-acff38b10f5a',
        'a7df2d1a-f60d-4b5c-b28b-932f5accfa30',
        'aadaeb68-96a1-4758-ba2f-e20a089fcb4b',
        '26037acf-103c-43b9-910b-2cca0c044dc2',
        'd09340b9-25e7-485a-b570-eababc2572a6'
    ]::uuid[]) AS id
)

-- Insert unique user_id and article_id combinations
INSERT INTO public.likes (user_id, article_id) VALUES
((SELECT id FROM user_ids LIMIT 1 OFFSET 0), 1),
((SELECT id FROM user_ids LIMIT 1 OFFSET 1), 2),
((SELECT id FROM user_ids LIMIT 1 OFFSET 2), 3),
((SELECT id FROM user_ids LIMIT 1 OFFSET 3), 4),
((SELECT id FROM user_ids LIMIT 1 OFFSET 4), 5),
((SELECT id FROM user_ids LIMIT 1 OFFSET 0), 2),
((SELECT id FROM user_ids LIMIT 1 OFFSET 1), 3),
((SELECT id FROM user_ids LIMIT 1 OFFSET 2), 4),
((SELECT id FROM user_ids LIMIT 1 OFFSET 3), 5),
((SELECT id FROM user_ids LIMIT 1 OFFSET 4), 1),
((SELECT id FROM user_ids LIMIT 1 OFFSET 0), 3),
((SELECT id FROM user_ids LIMIT 1 OFFSET 1), 4);