const dataSource = require('./data-source')

const createCartList = async (userId, itemId, quantity, optionId) => {
    const result = await dataSource.query(
        `INSERT INTO carts(
            user_id,
            item_id,
            quantity,
            option_id
        ) VALUES (?, ?, ?, ?)
        `, [userId, itemId, quantity, optionId]
    )

    return result;
}

const getAllCartList = async (userId, limit, offset) => {
    const result = await dataSource.query(
        `SELECT
            i.id,
            i.name,
            i.price,
            i.detail_image,
            c.quantity,
            c.checkbox,
            o.name as option_name
        FROM carts as c
        LEFT JOIN items as i ON i.id = c.item_id
        LEFT JOIN options as o ON o.id = c.option_id
        WHERE c.user_id = ?
        LIMIT ? OFFSET ?
        `, [userId, limit, offset]
    )

    return result;
}

const checkCart = async (userId, itemId, optionId) => {
    const [result] = await dataSource.query(
        `SELECT EXISTS  (
            SELECT id 
            FROM carts
            WHERE user_id = ?
            AND item_id = ?
            AND (
                IF (
                    ? = 1,
                    option_id = 1,
                    option_id IS NULL
                )
            )
        ) AS is_existed
        `, [userId, itemId, optionId]
    )
    
    return result.is_existed;
}

const updateCart = async (userId, itemId, quantity, optionId) => {
    const result = await dataSource.query(
        `UPDATE carts
        SET quantity = carts.quantity + ?
        WHERE user_id = ?
        AND item_id = ?
        AND (
            IF (
                ? = 1,
                option_id = 1,
                option_id IS NULL
            )
        )
        `, [quantity, userId, itemId, optionId]
    )

    return result;
}

const deleteCart= async (userId, itemId, optionId) => {
    const result = await dataSource.query(
        `DELETE FROM carts
        WHERE user_id = ?
        AND item_id = ?
        AND (
            IF (
                ? = 1,
                option_id = 1,
                option_id IS NULL
            )
        )
        `, [userId, itemId, optionId]
    )

    return result;
}




module.exports = {
    createCartList,
    getAllCartList,
    checkCart,
    updateCart,
    deleteCart
}