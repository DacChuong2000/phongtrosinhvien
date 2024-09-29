exports.priceOptions = [
    {
        value: 'Dưới 1 triệu',
        min: 0,
        max: 999999,
        type: 'PRICE'
    },
    {
        value: 'Từ 1 - 2 triệu',
        min: 1000000,
        max: 2000000,
        type: 'PRICE'
    },
    {
        value: 'Từ 2 - 3 triệu',
        min: 2000000,
        max: 3000000,
        type: 'PRICE'
    },
    {
        value: 'Từ 3 - 5 triệu',
        min: 3000000,
        max: 5000000,
        type: 'PRICE'
    },
    {
        value: 'Từ 5 - 7 triệu',
        min: 5000000,
        max: 7000000,
        type: 'PRICE'
    },
    {
        value: 'Từ 7 - 10 triệu',
        min: 7000000,
        max: 10000000,
        type: 'PRICE'
    },
    {
        value: 'Từ 10 - 15 triệu',
        min: 10000000,
        max: 15000000,
        type: 'PRICE'
    },
    {
        value: 'Trên 15 triệu',
        min: 15000000,
        max: 999999999999,
        type: 'PRICE'
    },
]
exports.areaOptions = [
    {
        value: 'Dưới 20 m²',
        min: 0,
        max: 19.99,
        type: 'AREA'
    },
    {
        value: 'Từ 20 - 30 m²',
        min: 20,
        max: 30,
        type: 'AREA'
    },
    {
        value: 'Từ 30 - 50 m²',
        min: 30,
        max: 50,
        type: 'AREA'
    },
    {
        value: 'Từ 50 - 70 m²',
        min: 50,
        max: 70,
        type: 'AREA'
    },
    {
        value: 'Từ 70 - 90 m²',
        min: 70,
        max: 90,
        type: 'AREA'
    },
    {
        value: 'Trên 90 m²',
        min: 90.01,
        max: 999999999999,
        type: 'AREA'
    },
]
exports.roles = [
    {
        code: 1010,
        value: 'Quản trị viên'
    },
    {
        code: 102,
        value: 'Thành viên'
    },
]
exports.categories = [
    {
        code: 'CTPT',
        text: 'Cho Thuê Phòng Trọ, Giá Rẻ, Tiện Nghi, Mới Nhất 2023',
        subText: 'Cho thuê phòng trọ - Kênh thông tin số 1 về phòng trọ giá rẻ, phòng trọ sinh viên, phòng trọ cao cấp mới nhất năm 2023. Tất cả nhà trọ cho thuê giá tốt nhất tại Việt Nam.',
        slug: 'Cho thuê phòng trọ',
        value: 'Cho thuê phòng trọ',
    },
    {
        code: 'NCT',
        text: 'Cho Thuê Nhà Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất 2023',
        subText: 'Cho thuê nhà nguyên căn - Kênh đăng tin cho thuê nhà số 1: giá rẻ, chính chủ, miễn trung gian, đầy đủ tiện nghi, mức giá, diện tích cho thuê khác nhau.',
        slug: 'Nhà cho thuê',
        value: 'Nhà cho thuê',
    },
    {
        code: 'CTCH',
        text: 'Cho Thuê Căn Hộ Chung Cư, Giá Rẻ, View Đẹp, Mới Nhất 2023',
        subText: 'Cho thuê căn hộ - Kênh đăng tin cho thuê căn hộ số 1: giá rẻ, chính chủ, đầy đủ tiện nghi. Cho thuê chung cư với nhiều mức giá, diện tích cho thuê khác nhau.',
        slug: 'Cho thuê căn hộ',
        value: 'Cho thuê căn hộ',
    },
    {
        code: 'TNOG',
        text: 'Tìm Người Ở Ghép, Tìm Nam Ở Ghép, Tìm Nữ Ở Ghép, Mới Nhất 2023',
        subText: 'Tìm người ở ghép, tìm nam ở ghép, tìm nữ ở ghép, share phòng trọ, tìm chỗ ở ghép cùng, tìm bạn ở ghép, xin ở ghép mới nhất 2023. Đăng tin ở ghép hiệu quả, nhanh chóng nhất...',
        slug: 'Tìm người ở ghép',
        value: 'Tìm người ở ghép',
    },
]