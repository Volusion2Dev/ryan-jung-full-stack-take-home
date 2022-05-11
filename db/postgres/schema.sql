CREATE SCHEMA site_builder;

CREATE TABLE site_builder.block (
    id SERIAL NOT NULL PRIMARY KEY,
    block_type text NOT NULL,
    configured_data jsonb NULL,
    position integer NOT NULL,
    created_on timestamp with time zone DEFAULT now() NOT NULL,
    modified_on timestamp with time zone DEFAULT now() NOT NULL
);

INSERT INTO site_builder.block
    (block_type, configured_data, position)
VALUES
    ('header', '{ "title": "Curbside Pickup" }', 0);

INSERT INTO site_builder.block
    (block_type, configured_data, position)
VALUES
    ('hero', '{ "title": "Now Offering Curbside Pickup!", "subtitle": "Delivered right to your car" }', 1);

INSERT INTO site_builder.block
    (block_type, configured_data, position)
VALUES
    ('footer', null, 2);

