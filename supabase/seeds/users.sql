-- Define a list of existing UUIDs
WITH existing_uuids AS (
    SELECT unnest(ARRAY[
        '301ffe32-e613-433d-968b-acff38b10f5a',
        'a7df2d1a-f60d-4b5c-b28b-932f5accfa30',
        'aadaeb68-96a1-4758-ba2f-e20a089fcb4b',
        '26037acf-103c-43b9-910b-2cca0c044dc2',
        'd09340b9-25e7-485a-b570-eababc2572a6'
    ]::uuid[]) AS id
)

-- Insert into auth.users using the existing UUIDs
INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    recovery_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    email_change,
    email_change_token_new,
    recovery_token
)
SELECT
    '00000000-0000-0000-0000-000000000000',
    id,
    'authenticated',
    'authenticated',
    'user' || (ROW_NUMBER() OVER ()) || '@gmail.com',
    crypt('password123', gen_salt('bf')),
    current_timestamp,
    current_timestamp,
    current_timestamp,
    '{"provider":"email","providers":["email"]}',
    '{}',
    current_timestamp,
    current_timestamp,
    '',
    '',
    '',
    ''
FROM existing_uuids;

-- test user email identities
INSERT INTO
    auth.identities (
        id,
        provider_id,
        user_id,
        identity_data,
        provider,
        last_sign_in_at,
        created_at,
        updated_at
    ) (
        select
            uuid_generate_v4 (),
            uuid_generate_v4 (),
            id,
            format('{"sub":"%s","email":"%s"}', id::text, email)::jsonb,
            'email',
            current_timestamp,
            current_timestamp,
            current_timestamp
        from
            auth.users
    );