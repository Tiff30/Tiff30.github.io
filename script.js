// 切换喜欢的爱心状态
function toggleLike() {
    const likeIcon = document.getElementById('like-icon');
    if (likeIcon.classList.contains('filled')) {
        likeIcon.style.backgroundColor = 'transparent';
        likeIcon.classList.remove('filled');
    } else {
        likeIcon.style.backgroundColor = '#F8BBD0';
        likeIcon.classList.add('filled');
    }
}

// 显示隐私弹窗
function showPrivacy() {
    const popup = document.getElementById('privacy-popup');
    popup.style.display = 'block';
}

// 关闭隐私弹窗
function closePrivacy() {
    const popup = document.getElementById('privacy-popup');
    popup.style.display = 'none';
}
