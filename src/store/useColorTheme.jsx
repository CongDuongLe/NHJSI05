import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

// đã được học : useState, useEffect
// dạng store zustand đc viết khá tương đồng như các hook bên trên
// cú pháp : use + tên Store

// với useState thì cú pháp : const [ state, setState ] = useState(initialValue)

// 1. tạo store (nhiệm vụ là quản lí thông tin của user)

export const useColorTheme = create(
  persist(
    (setState) => ({
        currentTheme : 'light',
        changeTheme : () => setState((state) => ({
            currentTheme : state.currentTheme === 'light' ? 'dark' : 'light'
        }))


     }),
    {
      name: 'appTheme',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
