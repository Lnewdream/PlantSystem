const initData = {
    historyRecords: [
        { id: 1, title: '系统初始化', content: '首次打开植物病害防管系统', time: new Date().toLocaleString() }
    ]
};
export const Store = {
    getData() {
        const localData = localStorage.getItem('plant_system_data');
        if (localData) {
            return JSON.parse(localData);
        } else {
            this.saveData(initData);
            return initData;
        }
    },
    // 数据
    saveData(data) {
        localStorage.setItem('plant_system_data', JSON.stringify(data));
    },
    addRecord(title, content) {
        const data = this.getData();
        data.historyRecords.unshift({
            id: Date.now(),
            title: title,
            content: content,
            time: new Date().toLocaleString()
        });
        this.saveData(data);
    }
};