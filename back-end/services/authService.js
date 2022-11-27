import authRepository from '../repositories/authRepository.js'

async function validate(user) {
    if (!user.username || !user.avatar) {
        return true;
    }
    
    return false;
};

async function register(user) {
    await authRepository.insert(user);
}

const authServices = {
    validate,
    register
};

export default authServices;



