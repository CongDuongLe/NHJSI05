import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// đã được học : useState, useEffect
// dạng store zustand đc viết khá tương đồng như các hook bên trên
// cú pháp : use + tên Store

// với useState thì cú pháp : const [ state, setState ] = useState(initialValue)

// 1. tạo store (nhiệm vụ là quản lí thông tin của user)

export const useUserInfo = create(
  persist(
    (setState) => ({
      // màu đỏ : có chức năng tương đông như state của useState
      // ở đây ta có number là state name, 60 là giá trị ban đầu của state

      number: 60,
      classes : {
        name : 'NH-JSI05',
        studentCount : 6,
        teacherCount : 1,
        studentList : [ 
            {name : 'Kiệt Minh', age : 16},
            {name : 'Quốc Trung', age : 16},
            {name : 'Hoàng Chung', age : 16},
            {name : 'Thanh Hà', age : 14},
            {name : 'Trí Hải', age : 15},
            {name : 'Quang Minh', age : 15},
        ],
        teacherName : 'Duong'
        
      },

      // màu xanh dương : các hàm để thay đổi state tương tự như setState của useState

      increaseByOne: () => setState((state) => ({ number: state.number + 1 })),
      decreaseByOne: () => setState((state) => ({ number: state.number - 1 })),
      resetCount: () => setState(() => ({ number: 60 })),
      // ở đây ta có 2 hàm increaseByOne và decreaseByOne để thay đổi state number

      // cập nhật lại tên lớp học

        updateClassName : (newClassName) => setState((state) => ({classes : {...state.classes, name : newClassName}}))
        // ..state.classes : lấy lại tất cả thông tin bây giờ của classes trong state
        // name : newClassName : cập nhật lại tên lớp học từ newClassName dc truyền từ componet dùng đến hàm updateClassName




    }),
    // khai báo tên store và nơi lưu trữ là localStorage
    // persist nó lưu stateName chứ k lưu lưu các hàm để thay đổi state
    {
      name: 'user-info',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
