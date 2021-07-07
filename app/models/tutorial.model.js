module.exports = (sequelize,Sequelize) =>{
    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },
        
    },{
        paranoid: true,
        timestamps: true,
        deleteAt: 'deleteAT',
    });

    return Tutorial;
};