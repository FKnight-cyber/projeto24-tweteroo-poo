import authRepository from '../repositories/authRepository.js'

async function validate(username, avatar) {
    if (!username || !avatar) {
        return true;
    }
    
    await authRepository.insert(username, avatar);
    return false;
};

const authServices = {
    validate
};

export default authServices;



