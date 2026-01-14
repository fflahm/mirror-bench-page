document.addEventListener('DOMContentLoaded', function() {
    // 你的详细数据 - 严格按照LaTeX表格转换
    const detailedData = [
        {model: "Human", human_tsr: 1.000, human_sir: 0.862, human_fcr: 1.000, human_pcr: 1.000, human_avg: 0.966, 
         robot_tsr: 1.000, robot_sir: 0.895, robot_fcr: 1.000, robot_pcr: 1.000, robot_avg: 0.974,
         overall_tsr: 1.000, overall_sir: 0.870, overall_fcr: 1.000, overall_pcr: 1.000, overall_avg: 0.968,
         is_special: true, is_human: true},
        
        {model: "Gemini-2.5-Pro-API", human_tsr: 0.141, human_sir: 0.611, human_fcr: 0.463, human_pcr: 0.667, human_avg: 0.470, 
         robot_tsr: 0.194, robot_sir: 0.528, robot_fcr: 0.193, robot_pcr: 0.533, robot_avg: 0.362,
         overall_tsr: 0.155, overall_sir: 0.593, overall_fcr: 0.389, overall_pcr: 0.630, overall_avg: 0.442,
         highlight_human_sir: true, highlight_human_fcr: true, highlight_human_pcr: true, highlight_human_avg: true,
         highlight_robot_tsr: true, highlight_robot_sir: true, highlight_robot_fcr: true, highlight_robot_pcr: true, highlight_robot_avg: true,
         highlight_overall_sir: true, highlight_overall_fcr: true, highlight_overall_pcr: true, highlight_overall_avg: true},
        
        {model: "Gemini-2.5-Flash-API", human_tsr: 0.042, human_sir: 0.584, human_fcr: 0.404, human_pcr: 0.607, human_avg: 0.409, 
         robot_tsr: 0.125, robot_sir: 0.456, robot_fcr: -0.145, robot_pcr: 0.437, robot_avg: 0.218,
         overall_tsr: 0.064, overall_sir: 0.556, overall_fcr: 0.254, overall_pcr: 0.560, overall_avg: 0.359,
         highlight_human_sir: true, highlight_human_fcr: true, highlight_human_pcr: true, highlight_human_avg: true,
         highlight_robot_tsr: true, highlight_robot_sir: true, highlight_robot_pcr: true, highlight_robot_avg: true,
         highlight_overall_sir: true, highlight_overall_fcr: true, highlight_overall_pcr: true, highlight_overall_avg: true},
        
        {model: "GPT-4.1-API", human_tsr: 0.138, human_sir: 0.546, human_fcr: 0.209, human_pcr: 0.531, human_avg: 0.356, 
         robot_tsr: 0.056, robot_sir: 0.372, robot_fcr: -0.592, robot_pcr: 0.306, robot_avg: 0.035,
         overall_tsr: 0.115, overall_sir: 0.506, overall_fcr: -0.011, overall_pcr: 0.469, overall_avg: 0.270},
        
        {model: "GPT-4o-API", human_tsr: 0.078, human_sir: 0.551, human_fcr: 0.252, human_pcr: 0.504, human_avg: 0.346, 
         robot_tsr: 0.015, robot_sir: 0.366, robot_fcr: -0.659, robot_pcr: 0.222, robot_avg: -0.014,
         overall_tsr: 0.061, overall_sir: 0.509, overall_fcr: 0.003, overall_pcr: 0.428, overall_avg: 0.250},
        
        {model: "Qwen-VL-Max-API", human_tsr: 0.068, human_sir: 0.543, human_fcr: 0.209, human_pcr: 0.526, human_avg: 0.336, 
         robot_tsr: 0.014, robot_sir: 0.347, robot_fcr: -0.779, robot_pcr: 0.290, robot_avg: -0.032,
         overall_tsr: 0.053, overall_sir: 0.499, overall_fcr: -0.061, overall_pcr: 0.462, overall_avg: 0.238},
        
        {model: "Claude-Sonnet-4.5-API", human_tsr: 0.219, human_sir: 0.502, human_fcr: 0.000, human_pcr: 0.510, human_avg: 0.308, 
         robot_tsr: 0.042, robot_sir: 0.339, robot_fcr: -0.724, robot_pcr: 0.291, robot_avg: -0.013,
         overall_tsr: 0.170, overall_sir: 0.464, overall_fcr: -0.197, overall_pcr: 0.451, overall_avg: 0.222,
         highlight_human_tsr: true, highlight_overall_tsr: true},
        
        {model: "Random", human_tsr: 0.000, human_sir: 0.490, human_fcr: -0.045, human_pcr: 0.264, human_avg: 0.177, 
         robot_tsr: 0.056, robot_sir: 0.467, robot_fcr: -0.200, robot_pcr: 0.302, robot_avg: 0.156,
         overall_tsr: 0.015, overall_sir: 0.485, overall_fcr: -0.087, overall_pcr: 0.274, overall_avg: 0.172,
         is_special: true, is_random: true},
        
        {model: "Qwen2.5-VL-72B", human_tsr: 0.021, human_sir: 0.497, human_fcr: -0.003, human_pcr: 0.380, human_avg: 0.224, 
         robot_tsr: 0.029, robot_sir: 0.354, robot_fcr: -0.761, robot_pcr: 0.227, robot_avg: -0.038,
         overall_tsr: 0.023, overall_sir: 0.465, overall_fcr: -0.209, overall_pcr: 0.338, overall_avg: 0.154},
        
        {model: "GLM-4.5V-106B", human_tsr: 0.125, human_sir: 0.441, human_fcr: -0.202, human_pcr: 0.411, human_avg: 0.193, 
         robot_tsr: 0.015, robot_sir: 0.259, robot_fcr: -1.208, robot_pcr: 0.238, robot_avg: -0.174,
         overall_tsr: 0.096, overall_sir: 0.400, overall_fcr: -0.467, overall_pcr: 0.365, overall_avg: 0.098},
        
        {model: "Qwen2.5-VL-32B", human_tsr: 0.000, human_sir: 0.442, human_fcr: -0.211, human_pcr: 0.336, human_avg: 0.142, 
         robot_tsr: 0.014, robot_sir: 0.339, robot_fcr: -0.836, robot_pcr: 0.258, robot_avg: -0.056,
         overall_tsr: 0.004, overall_sir: 0.419, overall_fcr: -0.382, overall_pcr: 0.314, overall_avg: 0.089},
        
        {model: "InternVL3.5-4B", human_tsr: 0.005, human_sir: 0.376, human_fcr: -0.436, human_pcr: 0.259, human_avg: 0.051, 
         robot_tsr: 0.000, robot_sir: 0.329, robot_fcr: -0.823, robot_pcr: 0.229, robot_avg: -0.066,
         overall_tsr: 0.004, overall_sir: 0.366, overall_fcr: -0.538, overall_pcr: 0.251, overall_avg: 0.020},
        
        {model: "GPT-4o-Mini-API", human_tsr: 0.010, human_sir: 0.297, human_fcr: -0.769, human_pcr: 0.213, human_avg: -0.062, 
         robot_tsr: 0.000, robot_sir: 0.176, robot_fcr: -1.714, robot_pcr: 0.129, robot_avg: -0.352,
         overall_tsr: 0.008, overall_sir: 0.270, overall_fcr: -1.029, overall_pcr: 0.190, overall_avg: -0.140},
        
        {model: "LLaVA-1.6-Llama3-8B", human_tsr: 0.000, human_sir: 0.209, human_fcr: -1.038, human_pcr: 0.108, human_avg: -0.180, 
         robot_tsr: 0.014, robot_sir: 0.216, robot_fcr: -1.492, robot_pcr: 0.110, robot_avg: -0.288,
         overall_tsr: 0.004, overall_sir: 0.210, overall_fcr: -1.163, overall_pcr: 0.109, overall_avg: -0.210},
        
        {model: "LLaVA-1.6-7B", human_tsr: 0.000, human_sir: 0.183, human_fcr: -1.320, human_pcr: 0.172, human_avg: -0.241, 
         robot_tsr: 0.000, robot_sir: 0.176, robot_fcr: -1.782, robot_pcr: 0.115, robot_avg: -0.372,
         overall_tsr: 0.000, overall_sir: 0.181, overall_fcr: -1.445, overall_pcr: 0.156, overall_avg: -0.277},
        
        {model: "InternVL3.5-1B", human_tsr: 0.000, human_sir: 0.052, human_fcr: -1.088, human_pcr: 0.026, human_avg: -0.253, 
         robot_tsr: 0.000, robot_sir: 0.039, robot_fcr: -1.794, robot_pcr: 0.024, robot_avg: -0.433,
         overall_tsr: 0.000, overall_sir: 0.049, overall_fcr: -1.281, overall_pcr: 0.025, overall_avg: -0.302},
        
        {model: "Qwen2.5-VL-7B", human_tsr: 0.000, human_sir: 0.184, human_fcr: -1.283, human_pcr: 0.111, human_avg: -0.247, 
         robot_tsr: 0.000, robot_sir: 0.126, robot_fcr: -2.063, robot_pcr: 0.073, robot_avg: -0.466,
         overall_tsr: 0.000, overall_sir: 0.171, overall_fcr: -1.494, overall_pcr: 0.100, overall_avg: -0.306},
        
        {model: "InternVL3.5-2B", human_tsr: 0.000, human_sir: 0.147, human_fcr: -1.239, human_pcr: 0.076, human_avg: -0.254, 
         robot_tsr: 0.000, robot_sir: 0.100, robot_fcr: -2.138, robot_pcr: 0.073, robot_avg: -0.491,
         overall_tsr: 0.000, overall_sir: 0.137, overall_fcr: -1.484, overall_pcr: 0.075, overall_avg: -0.318},
        
        {model: "Qwen2.5-VL-3B", human_tsr: 0.000, human_sir: 0.068, human_fcr: -1.503, human_pcr: 0.052, human_avg: -0.346, 
         robot_tsr: 0.000, robot_sir: 0.037, robot_fcr: -2.027, robot_pcr: 0.045, robot_avg: -0.486,
         overall_tsr: 0.000, overall_sir: 0.063, overall_fcr: -1.616, overall_pcr: 0.050, overall_avg: -0.376},
        
        {model: "LLaVA-1.5-7B", human_tsr: 0.000, human_sir: 0.053, human_fcr: -1.834, human_pcr: 0.049, human_avg: -0.433, 
         robot_tsr: 0.000, robot_sir: 0.035, robot_fcr: -2.584, robot_pcr: 0.057, robot_avg: -0.623,
         overall_tsr: 0.000, overall_sir: 0.049, overall_fcr: -2.038, overall_pcr: 0.051, overall_avg: -0.485}
    ];

    // 创建详细结果表格
    const detailedTable = new Tabulator("#mirrorbench-detailed-table", { // 与html中的div id对应
        data: detailedData,
        layout: "fitColumns",
        responsiveLayout: "collapse",
        placeholder: "No Data Available",
        height: "100%",
        virtualDom: true,
        virtualDomBuffer: 1000,
        
        // 列定义 - 按照你的LaTeX表格结构
        columns: [
            // 固定第一列宽度，不拉伸
            {title: "Model", field: "model", width: 150, hozAlign: "left", headerFilter: true},
            
            // 其余列使用fitData，让Tabulator自适应
            {title: "Human", headerHozAlign: "center", columns: [
                {title: "TSR↑", field: "human_tsr", hozAlign: "center", formatter: valueFormatter, minWidth: 60},
                {title: "SIR↑", field: "human_sir", hozAlign: "center", formatter: valueFormatter, minWidth: 60},
                {title: "FCR↑", field: "human_fcr", hozAlign: "center", formatter: valueFormatter, minWidth: 60},
                {title: "PCR↑", field: "human_pcr", hozAlign: "center", formatter: valueFormatter, minWidth: 60},
                {title: "AVG↑", field: "human_avg", hozAlign: "center", formatter: valueFormatter, minWidth: 60}
            ]},
            
            // Robot 列同样
            {title: "Robot", headerHozAlign: "center", columns: [
                {title: "TSR↑", field: "robot_tsr", hozAlign: "center", formatter: valueFormatter, minWidth: 60},
                {title: "SIR↑", field: "robot_sir", hozAlign: "center", formatter: valueFormatter, minWidth: 60},
                {title: "FCR↑", field: "robot_fcr", hozAlign: "center", formatter: valueFormatter, minWidth: 60},
                {title: "PCR↑", field: "robot_pcr", hozAlign: "center", formatter: valueFormatter, minWidth: 60},
                {title: "AVG↑", field: "robot_avg", hozAlign: "center", formatter: valueFormatter, minWidth: 60}
            ]},
            
            // Overall 列
            {title: "Overall", headerHozAlign: "center", columns: [
                {title: "TSR↑", field: "overall_tsr", hozAlign: "center", formatter: valueFormatter, minWidth: 60},
                {title: "SIR↑", field: "overall_sir", hozAlign: "center", formatter: valueFormatter, minWidth: 60},
                {title: "FCR↑", field: "overall_fcr", hozAlign: "center", formatter: valueFormatter, minWidth: 60},
                {title: "PCR↑", field: "overall_pcr", hozAlign: "center", formatter: valueFormatter, minWidth: 60},
                {title: "AVG↑", field: "overall_avg", hozAlign: "center", formatter: valueFormatter, minWidth: 60}
            ]}
        ],

        
        // 行格式化
        rowFormatter: function(row) {
            const data = row.getData();
            const rowEl = row.getElement();
            
            // Human行特殊样式
            if (data.is_human) {
                rowEl.style.backgroundColor = "#e8f5e8";
                rowEl.style.fontWeight = "bold";
                rowEl.style.borderTop = "2px solid #4CAF50";
                rowEl.style.borderBottom = "2px solid #4CAF50";
            }
            // Random行特殊样式
            else if (data.is_random) {
                rowEl.style.backgroundColor = "#fff8e1";
                rowEl.style.fontWeight = "bold";
                rowEl.style.borderTop = "2px solid #FFC107";
                rowEl.style.borderBottom = "2px solid #FFC107";
            }
            // API模型特殊样式
            else if (data.model.includes("-API")) {
                rowEl.style.backgroundColor = "#e3f2fd";
            }
            
            // 高亮最高和次高值
            applyHighlightStyling(row, data);
        },
        
        // 排序
        initialSort: [
            {column: "overall_avg", dir: "desc"}
        ]
    });

    // 值格式化函数
    function valueFormatter(cell, params) {
        let value = cell.getValue();
        if (value === null || value === undefined) return "";
        
        // TSR列保留3位小数，其他列保留3位小数
        let formattedValue = params.is_tsr ? value.toFixed(3) : value.toFixed(3);
        
        // 特殊值处理
        if (Math.abs(value) < 0.0005 && value !== 0) {
            formattedValue = value > 0 ? ">0.000" : "<0.000";
        }
        
        return formattedValue;
    }

    // 应用高亮样式
    function applyHighlightStyling(row, data) {
        const rowEl = row.getElement();
        
        // 遍历所有单元格
        row.getCells().forEach(cell => {
            const field = cell.getField();
            const value = cell.getValue();
            const cellEl = cell.getElement();
            
            // 跳过model列
            if (field === "model") return;
            
            // 应用高亮样式
            if ((field === "human_sir" && data.highlight_human_sir) ||
                (field === "human_fcr" && data.highlight_human_fcr) ||
                (field === "human_pcr" && data.highlight_human_pcr) ||
                (field === "human_avg" && data.highlight_human_avg) ||
                (field === "robot_tsr" && data.highlight_robot_tsr) ||
                (field === "robot_sir" && data.highlight_robot_sir) ||
                (field === "robot_fcr" && data.highlight_robot_fcr) ||
                (field === "robot_pcr" && data.highlight_robot_pcr) ||
                (field === "robot_avg" && data.highlight_robot_avg) ||
                (field === "overall_tsr" && data.highlight_overall_tsr) ||
                (field === "overall_sir" && data.highlight_overall_sir) ||
                (field === "overall_fcr" && data.highlight_overall_fcr) ||
                (field === "overall_pcr" && data.highlight_overall_pcr) ||
                (field === "overall_avg" && data.highlight_overall_avg)) {
                
                // 最高值 - 红色背景
                if (field.includes("avg") || field.includes("sir") || field.includes("pcr") || field.includes("fcr") || field.includes("tsr")) {
                    cellEl.style.backgroundColor = "#ffebee";
                    cellEl.style.fontWeight = "bold";
                    cellEl.style.color = "#c62828";
                }
            }
            
            // 次高值 - 黄色背景
            if ((field === "human_tsr" && data.highlight_human_tsr) ||
                (field === "overall_tsr" && data.highlight_overall_tsr)) {
                cellEl.style.backgroundColor = "#fff8e1";
                cellEl.style.fontWeight = "bold";
            }
        });
    }

    // 添加下载按钮
    addDownloadButton();
});

// 添加下载按钮
function addDownloadButton() {
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'btn btn-sm btn-outline-secondary mb-3';
    downloadBtn.innerHTML = '<i class="fas fa-download"></i> Download CSV';
    downloadBtn.onclick = function() {
        // 这里需要实现CSV导出功能
        alert('CSV download functionality needs to be implemented');
    };
    
    const tableContainer = document.querySelector('#mirrorbench-detailed-table');
    if (tableContainer && tableContainer.parentElement) {
        tableContainer.parentElement.insertBefore(downloadBtn, tableContainer);
    }
}